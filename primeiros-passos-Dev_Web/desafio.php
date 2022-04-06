<!DOCTYPE php>
<html lang='pt-br'>

    <head>
        <title>A saga de um programador</title>

        <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>

        <style type="text/css">
            .linha {
                font-weight: bold;
                color: greenyellow;
                padding-left: 10px;
                line-height: 50px;
            }
        </style>
    </head>

    <body>
        <div id="accordion">
        <?php
            for ( $i = 0; $i < 5; $i++) {
                print("
                <h3>Capitulo $i</h3>
                    <div>
                        <p>Bom multiplas coisas me levaram para o caminho da programação, pretendo contar essa história pelo linkedin segue lá: <a href=\"https://www.linkedin.com/in/jefferson-santos-b22701231/\">Jefferson Santos</a></p>
                    </div>
                ");
            }
        ?>
        </div>
    </body>

    <script type="text/javascript">
        $( function() {
            $( "#accordion" ).accordion();
        });
    </script>

</html>