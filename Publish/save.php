<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

$db = SqliteConnection('../mydatabase.db');

// // try {

// $sql = 'INSERT INTO asiakas (etunimi, sukunimi, sahkoposti, osoite, postinumero, puhelinnumero, postitoimipaikka)
// values ("Terhi", "Kettonen", "Pekka.Kettonen@gmail.com", "Torikatu 4b", 90800, "045112678", "Oulu")';

// // Query asiakas

// $asiakas = $db -> exec($sql);

// // Insert tilaus

// $sql = 'INSERT INTO tilaus (astunnus, kanta_asiakas, maksutapa, postitapa)
// SELECT a.Astunnus, "No", "Visa", "Paketti"
// FROM asiakas a
// LEFT JOIN tilaus t ON t.astunnus = a.astunnus
// WHERE t.astunnus IS NULL';

// $tilaus = $db -> exec($sql);

$input = json_decode(file_get_contents('php://input'));
$etunimi = filter_var($input -> etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$sukunimi = filter_var($input -> sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$sahkoposti = filter_var($input -> sahkoposti, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$osoite = filter_var($input -> sahkoposti, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$postinumero = filter_var($input -> postinumero, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$puhelinnumero = filter_var($input -> puhelinnumero, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$postitoimipaikka = filter_var($input -> postitoimipaikka, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$maksutapa = filter_var($input -> maksutapa, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$postitustapa = filter_var($input -> postitustapa, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$kpl = filter_var($input -> kpl ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$koko = filter_var($input -> koko ?? '', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$cart = $input->cart;

try {

    $db->beginTransaction();

    // Insert asiakas
    $sql = "INSERT INTO asiakas (etunimi, sukunimi, sahkoposti, osoite, postinumero, puhelinnumero, postitoimipaikka)
    values ('" .
    filter_var($etunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "', '" .
    filter_var($sukunimi, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "', '" .
    filter_var($sahkoposti, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "', '" .
    filter_var($osoite, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "', '" .
    filter_var($postinumero, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "', '" .
    filter_var($puhelinnumero, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "', '" .
    filter_var($postitoimipaikka, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . 
    "')";

    $asiakas = $db -> exec($sql);

    // Postman 

    // // Insert tilaus
    $sql = "INSERT INTO tilaus (astunnus, maksutapa, postitapa)
    SELECT a.Astunnus, '$maksutapa', '$postitustapa'
    FROM asiakas a
    LEFT JOIN tilaus t ON t.astunnus = a.astunnus
    WHERE t.astunnus IS NULL";

    $tilaus = $db -> exec($sql);

    // // Insert tilausrivi by logging throught cart (which is an array)
    foreach ($cart as $product) {
        $sql = "INSERT into tilausrivi (tilausnro, id, kpl, koko)
        SELECT t.tilausnro, p.id, :kpl, :koko
        FROM tilaus t
        INNER JOIN tuote p ON p.id = :id
        WHERE t.tilausnro = (SELECT MAX(tilausnro) FROM tilaus)";

        $tilausrivi = $db->prepare($sql);
        $tilausrivi->bindValue(':kpl', $product->quantity, PDO::PARAM_INT);
        $tilausrivi->bindValue(':koko', $product->koko, PDO::PARAM_INT);
        $tilausrivi->bindValue(':id', $product->id, PDO::PARAM_INT);
        $tilausrivi->execute();
    }



    $db->commit(); // Commit transaction

    // Return 200 status and customer id
    // header('HTTP/1.1 200 OK');
    // $data = array('id' => $asiakas);
    // echo json_encode($data);

} catch (PDOException $e) {
    $db->rollBack();
}

?>