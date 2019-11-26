<!DOCTYPE html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width">
	<title>Web site| Kozawa Shigeki</title>
	<meta name="description" content="">
	<meta name="keywords" content="">

	<meta name="format-detection" content="telephone=no">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="default">

	<!-- ogp -->
	<meta property="og:url" content="">
	<meta property="og:image" content="【og:image】">
	<meta property="og:site_name" content="Web site| Kozawa Shigeki">
	<meta property="og:locale" content="ja_JP">
	<meta property="og:title" content="Web site| Kozawa Shigeki">
	<meta property="og:description" content="">
	<meta property="og:type" content="website">

	<!-- twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="Web site| Kozawa Shigeki">
	<meta name="twitter:description" content="">
	<meta name="twitter:image:src" content="">

	<link rel="stylesheet" href="./css/base.css" type="text/css">
	<script type="text/javascript" src="./js/jquery-1.12.0.min.js"></script>
	<script type="text/javascript" src="./js/waypoint.js"></script>
	<script type="text/javascript" src="./js/common.js"></script>
</head>
<body>
	<main>
		<section class="section contact">
			<div class="ttl contact__ttl anim">
				<h2>確認画面</h2>
			</div>
			<div class="cont contact__cont anim">
				<p class="mb20">入力いただきありがとうございます！<br>送信前に入力内容をご確認ください。</p>
				<hr>
				<form action="mailto.php" method="post">
					<table border="1">
						<tr>
							<td>なまえ：</td>
							<td><?php echo $_POST["name"]; ?></td>
						</tr>
						<tr>
							<td>メールアドレス：</td>
							<td><?php echo $_POST["mail"]; ?></td>
						</tr>
						<tr>
							<td>コメント：</td>
							<td><?php echo $_POST["inquiry"]; ?></td>
						</tr>
					</table>
					<p class="submit"><input type="submit" value="送信" /></p>
				</form>
			</div>
		</section>
	</main>
</body>
</html>