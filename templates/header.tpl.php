<?header ("Content-Type: text/html;charset=utf-8"); ?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
	<title><?=trim($PAGE['meta_title'])?></title>
<?if(!empty($PAGE['meta_keywords'])){?>
    <meta name="keywords" content="<?=$PAGE['meta_keywords']?>">
<?}?>
<?if(!empty($PAGE['meta_description'])){?>
    <meta name="description" content="<?=$PAGE['meta_description']?>">
<?}?>
    <meta name="viewport" content="width=device-width, user-scalable=no, maximum-scale=1.0, initial-scale=1.0, minimum-scale=1.0">
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="/skin/styles/foundation.css" type="text/css" media="screen">
	<link rel="stylesheet" href="/skin/styles/app.css" type="text/css" media="screen">
</head>
<body>