<?php
// Change Web config here
$TITLE = 'Test'; // Web TITLE
$WEB_ICON = '';
$BG = 'https://picsum.photos/1920/1080';
?>

<?php
function ext($file)
{
  if (is_dir($file)) {
    return 'dir';
  } else {
    return str_replace('7z', 'sevenz', strtolower(pathinfo($file)['extension']));
  }
}

function human_filesize($file)
{
  $bytes = filesize($file);
  $decimals = 1;
  $factor = floor((strlen($bytes) - 1) / 3);
  if ($factor > 0) $sz = 'KMGT';
  return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor)) . @$sz[$factor - 1] . 'B';
}

$files = scandir('.');
$exclude = array(
  '.',
  '..',
  '.DS_Store',
  'index.php',
  'index.html',
  'icon',
  'component',
  '.git',
  '.gitmodules',
  '.gitignore',
  'node_modules'
);

foreach ($exclude as $ex) {
  if (($key = array_search($ex, $files)) !== false) {
    unset($files[$key]);
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $TITLE; ?> | dethz Listing</title>

  <link rel="shortcut icon" href="<?php echo $WEB_ICON; ?>" type="image/x-icon">
  <link rel="stylesheet" href="component/main.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

  <link rel="stylesheet" href="/listing-php/cdn/index.css">
  <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/katzEco/legacy-code@main/listing-php/cdn/index.css"> -->

  <style>
    @import url(https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai:100,200,300,regular,500,600,700);

    * {
      font-family: 'IBM Plex Sans Thai', sans-serif;
    }

    .cover {
      width: 100%;
      height: auto;
      background-image: url('<?php echo $BG; ?>');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .holder {
      min-height: 100vh;
    }

    .footer {
      width: 100%;
      padding: 1rem 0;
      text-align: center;
      background-color: #2e2f2f;
      color: whitesmoke;
    }

    .footer p {
      margin-bottom: 0 !important;
    }

    .footer a {
      color: whitesmoke;
      text-decoration: underline;
      transition: all .3s;
    }

    .footer a:hover {
      opacity: .6;
      text-decoration: underline dashed;
    }
  </style>
</head>

<body>

  <body>
    <div class="cover">
      <div class="holder">
        <div class="middle">
          <center>
            <div class="card bg-dark text-white">
              <div class="card-header">
                <h1>
                  <u>
                    <?php
                    echo $TITLE;
                    ?>
                  </u>
                </h1>
              </div>
              <div class="card-body">
                <div class="card-text">
                  <?php
                  if (!empty($files)) {
                    foreach ($files as $file) {
                  ?>
                      <a href="<?php echo $_SERVER['REQUEST_URI'] . '/' . $file; ?>" class="control">
                        <span>
                          <img class="icon" src="https://cdn.jsdelivr.net/gh/katzEco/legacy-code@main/listing-php/cdn/image/<?php echo ext($file); ?>.svg" alt="">
                        </span>
                        <span class="name">
                          <?php
                          echo $file;
                          ?>
                        </span>
                      </a>
                      <span class="filesize">
                        <?php
                        if (ext($file) == 'dir') {
                          echo "";
                        } else {
                          echo human_filesize($file);
                        }
                        ?>
                      </span>
                      <br>
                  <?php
                    }
                  } else {
                    echo "<b>NO FILE FOUND HERE!</b>";
                  }
                  ?>
                </div>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>
        made w/ 🤍 <a href="https://suphakit.net" target="_blank">Suphakit P.</a>
      </p>
      <p>
        &copy; 2021 <a href="https://suphakit.net" target="_blank">Suphakit P.</a> All Right Reserved.
      </p>
      <?php echo $_SERVER['REQUEST_URI'] ?>
    </div>

    <!-- Script Embed -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
  </body>

</html>