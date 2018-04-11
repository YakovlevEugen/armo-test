<?
$PAGE['meta_title'] = "Главная";
$page = 'index';
include($_SERVER['DOCUMENT_ROOT']."/templates/main/header.tpl.php");
?>

<aside class="tree-layout">
    <div class="empty-tree">Файлы не загружены</div>
</aside>
<div class="desktop">
  <div class="desktop__column">
    <div class="desktop__block">
      <div class="desktop-table">
        <table></table>
      </div>
    </div>
  </div>
  <div class="desktop__column">
    <div class="desktop__block"></div>
    <div class="desktop__block"></div>
  </div>
</div>

<?
include($_SERVER['DOCUMENT_ROOT']."/templates/main/footer.tpl.php");
?>