<?include($_SERVER['DOCUMENT_ROOT']."/templates/header.tpl.php")?>

<div class="main-container<?=$page=='index' ? ' index-page' : ''?>">
<header class="main-header">
  <nav class="main-header__nav header-nav">
    <ul class="header-nav__group">
      <li class="header-nav__item">
        <label class="header-nav__link">
          <input class="js-downloadFile" type="file">
          <svg class="header-nav__item-img svg-icon icon-download">
            <use xlink:href="/skin/images/svg-sprite.svg#download"></use>
          </svg>
          <span class="header-nav__item-name">Загрузчик</span>
        </label>
      </li>
      <li class="header-nav__item">
        <a href="#" class="header-nav__link">
          <svg class="header-nav__item-img svg-icon icon-edit">
            <use xlink:href="/skin/images/svg-sprite.svg#edit"></use>
          </svg>
          <span class="header-nav__item-name">Редактор данных</span>
        </a>
      </li>
    </ul>
  </nav>
</header>

<main class="main-center">
