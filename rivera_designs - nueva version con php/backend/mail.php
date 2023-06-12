<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require_once "vendor/autoload.php";

try {
    // Intentar crear una nueva instancia de la clase PHPMailer
    $mail = new PHPMailer (true);
// (…)
} catch (Exception $e) {
        echo "Mailer Error: ".$mail->ErrorInfo;
}
