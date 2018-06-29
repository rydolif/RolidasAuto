<?php
	$SITE_TITLE = 'RolidasAuto';
	$SITE_DESCR = '';

	if ( isset($_POST) ) {
		$name = htmlspecialchars(trim($_POST['name']));
		$phone = htmlspecialchars(trim($_POST['phone']));
		$subject = $_POST['subject'] ? htmlspecialchars(trim($_POST['subject'])) : '';

		$link = isset($_POST['link']) ? htmlspecialchars(trim($_POST['link'])) : '';
		$type = isset($_POST['type']) ? htmlspecialchars(trim($_POST['type'])) : '';
		$make = isset($_POST['make']) ? htmlspecialchars(trim($_POST['make'])) : '';
		$year = isset($_POST['year']) ? htmlspecialchars(trim($_POST['year'])) : '';
		$bodywork = isset($_POST['bodywork']) ? htmlspecialchars(trim($_POST['bodywork'])) : '';
		$engine = isset($_POST['engine']) ? htmlspecialchars(trim($_POST['engine'])) : '';
		$kw = isset($_POST['kw']) ? htmlspecialchars(trim($_POST['kw'])) : '';
		$transmission = isset($_POST['transmission']) ? htmlspecialchars(trim($_POST['transmission'])) : '';
		$amount = isset($_POST['amount']) ? htmlspecialchars(trim($_POST['amount'])) : '';
		$mileage = isset($_POST['mileage']) ? htmlspecialchars(trim($_POST['mileage'])) : '';
		$country = isset($_POST['country']) ? htmlspecialchars(trim($_POST['country'])) : '';
		$vin = isset($_POST['vin']) ? htmlspecialchars(trim($_POST['vin'])) : '';

		$to = 'rudolifrudolif@gmail.com';

		$headers = "From: $SITE_TITLE \r\n";
		$headers .= "Reply-To: ". $email . "\r\n";
		$headers .= "Content-Type: text/html; charset=utf-8\r\n";

		$data = '<h1>'.$subject."</h1>";
		$data .= 'Имя: '.$name."<br>";
		$data .= 'Телефон: '.$phone."<br>";


		if ( $link) {
			$data .= 'Ссылка: ' . $link ."<br>";
		}

		if ( $type) {
			$data .= 'Тип автомобиля: ' . $type ."<br>";
		}

		if ( $make) {
			$data .= 'Марка: ' . $make ."<br>";
		}

		if ( $year) {
			$data .= 'Год выпуска: ' . $year ."<br>";
		}

		if ( $bodywork) {
			$data .= 'Тип кузова: ' . $bodywork ."<br>";
		}

		if ( $engine) {
			$data .= 'Тип двигателя: ' . $engine ."<br>";
		}

		if ( $kw) {
			$data .= 'Количество KW: ' . $kw ."<br>";
		}

		if ( $transmission) {
			$data .= 'Коробка передач: ' . $transmission ."<br>";
		}

		if ( $amount) {
			$data .= 'Объем двигателя: ' . $amount ."<br>";
		}

		if ( $mileage) {
			$data .= 'Пробег: ' . $mileage ."<br>";
		}

		if ( $country) {
			$data .= 'Страна производитель: ' . $country ."<br>";
		}

		if ( $vin) {
			$data .= 'VIN номер: ' . $vin ."<br>";
		}

		$message = "<div style='background:#ccc;border-radius:10px;padding:20px;'>
				".$data."
				<br>\n
				<hr>\n
				<br>\n
				<small>это сообщение было отправлено с сайта ".$SITE_TITLE." - ".$SITE_DESCR.", отвечать на него не надо</small>\n</div>";
		$send = mail($to, $subject, $message, $headers);

		if ( $send ) {
			echo '';
		} else {
				echo '<div class="error">Ошибка отправки формы</div>';
		}

	}
	else {
			echo '<div class="error">Ошибка, данные формы не переданы.</div>';
	}
	die();
?>