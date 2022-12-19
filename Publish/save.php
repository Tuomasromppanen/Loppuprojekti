<?php

require_once '../Publish/dbafunktio.php';
require_once '../Publish/headers.php';

$db = SqliteConnection('../mydatabase.db');

// Insert asiakas

$sql = 'INSERT INTO asiakas (etunimi, sukunimi, sahkoposti, osoite, postinumero, puhelinnumero, postitoimipaikka)
values ("Pekka", "Kettonen", "Pekka.Kettonen@gmail.com", "Torikatu 4b", 90800, "0451126785", "Oulu")';

// $sqlx = 'INSERT INTO posti SELECT postinumero, postitoimipaikka FROM asiakas';

$sqlx = 'CREATE TRIGGER insert_posti
AFTER INSERT ON asiakas FOR EACH ROW
BEGIN
INSERT INTO posti (postinumero, postitoimipaikka)
VALUES (NEW.postinumero, NEW.postitoimipaikka);
END';

// Query asiakas
$sql = $db -> query($sql);

// Query posti
$sqlx = $db -> query($sqlx);

// // Insert tilaus

// $sqlp = 'CREATE TRIGGER insert_tilaus
// AFTER INSERT ON asiakas FOR EACH ROW
// BEGIN
// INSERT INTO tilaus (etunimi, tilauspvm, kanta_asiakas, maksutapa, postitapa)
// VALUES (NEW.etunimi, CURRENT_TIMESTAMP, "Visa", "Nouto", "Oulu");
// END';

// $result = $db->query($sqlp);

// if ($result === false) {
//   $errorInfo = $db->errorInfo();
//   echo "Error creating trigger: " . $errorInfo[2];
// }

// $zip = filter_var($input->zip, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
// $home = filter_var($input->home, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

// $fname = filter_var($input->firstname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
// $lname = filter_var($input->lastname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
// $email = filter_var($input->email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
// $address = filter_var($input->address, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
// $phone = filter_var($input->phone, FILTER_SANITIZE_SPECIAL_CHARS);

// $deliver = filter_var($input->deliver, FILTER_SANITIZE_SPECIAL_CHARS);
// $payment = filter_var($input->payment, FILTER_SANITIZE_SPECIAL_CHARS);

// $kpl = filter_var($input->kpl, FILTER_SANITIZE_SPECIAL_CHARS);

// $cart = $input->cart;

// // Insert posti
// $sql = "INSERT into posti (postinumero, postitoimipaikka) values
// ('".

//     filter_var($zip, FILTER_SANITIZE_SPECIAL_CHARS). "','".
//     filter_var($home, FILTER_SANITIZE_SPECIAL_CHARS)

// . "')";

// $postinumero_primary->execute($sql);

// // Insert postnumber to asiakas table
// $sql = "INSERT into asiakas (postinumero) values (postinumero)";
// $postinumero_children->execute($sql);

// // Insert asiakas
// $sql = "INSERT into asiakas (etunimi, sukunimi, sahkoposti, osoite, puhelinnumero) values
// ('".

//     filter_var($fname, FILTER_SANITIZE_SPECIAL_CHARS). "','".
//     filter_var($lname, FILTER_SANITIZE_SPECIAL_CHARS). "','".
//     filter_var($email, FILTER_SANITIZE_SPECIAL_CHARS). "','".
//     filter_var($address, FILTER_SANITIZE_SPECIAL_CHARS). "','".
//     filter_var($phone, FILTER_SANITIZE_SPECIAL_CHARS)

// . "')";

// $astunnus_primary->execute($sql);

// // Insert astunnus to tilaus table
// $sql = "INSERT into tilaus (astunnus) values (astunnus)";
// $astunnus_children->execute($sql);

// // Insert tilaus
// $sql = "INSERT into tilaus (kanta_asiakas, maksutapa, postitustapa) values
// ('".

//     filter_var($deliver, FILTER_SANITIZE_SPECIAL_CHARS). "','".
//     filter_var($payment, FILTER_SANITIZE_SPECIAL_CHARS)

// . "')";

// $tilausnro_primary->execute($sql);

// // Insert tilausnro to tilausrivi
// $sql = "INSERT into tilausrivi (tilausnro) values (tilausnro)";
// $tilausnro_children->execute($sql);

// // Insert tilausrivi
// $sql = "INSERT into tilaus (kpl) values
// ('".

//     filter_var($kpl, FILTER_SANITIZE_SPECIAL_CHARS)

// . "')";
















?>