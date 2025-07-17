<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/SMTP.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('ваш gmail');
	//Кому отправить
	$mail->addAddress('ваш gmail');
	//Тема письма
	$mail->Subject = 'Привет! Это "Письмо"';


	 // Email server settings
	 $mail->isSMTP();
	 $mail->Host = 'smtp.gmail.com';             //  smtp host
	 $mail->SMTPAuth = true;
	 $mail->Username = 'ваш gmail';   //  sender username
	 $mail->Password = 'pogv nnfc uvru xrll';       // sender password
	 $mail->SMTPSecure = 'ssl';                  // encryption - ssl/tls
	 $mail->Port = 465;

	//Тело письма
	$body = '<h1>Встречайте супер письмо!</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
	
?>