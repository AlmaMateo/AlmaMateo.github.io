<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Configuración del correo
    $to = "almamateop@gmail.com"; // Cambia esta dirección por tu correo de destino
    $subject = "Nuevo mensaje de contacto desde el sitio web";
    $body = "Nombre: $name\n";
    $body .= "Correo electrónico: $email\n\n";
    $body .= "Mensaje:\n$message";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado exitosamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
    }
}
?>
