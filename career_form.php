<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and retrieve form inputs
    $firstName = htmlspecialchars($_POST['firstName']);
    $email = htmlspecialchars($_POST['email']);
    $contactNumber = htmlspecialchars($_POST['contactNumber']);
    $location = htmlspecialchars($_POST['location']);
    $position = htmlspecialchars($_POST['position']);
    $portfolio = htmlspecialchars($_POST['portfolio']);
    $experience = htmlspecialchars($_POST['experience']);
    $description = htmlspecialchars($_POST['description']);

    // Email configuration
    $to = "tcpprasanna@gmail.com"; // Replace with your email address
    $subject = "New Career Application";

    // Email message
    $message = "You have received a new application.\n\n" .
        "First Name: $firstName\n" .
        "Email: $email\n" .
        "Contact Number: $contactNumber\n" .
        "Location: $location\n" .
        "Position: $position\n" .
        "Portfolio: $portfolio\n" .
        "Experience: $experience\n" .
        "Description: $description";

    // Additional headers
    $headers = "From: $email";

    // Output JavaScript for alert
    if (mail($to, $subject, $message, $headers)) {
        echo "<script>alert('Your application has been submitted successfully!');</script>";
    } else {
        echo "<script>alert('There was an error sending your application. Please try again later.');</script>";
    }
}
?>
