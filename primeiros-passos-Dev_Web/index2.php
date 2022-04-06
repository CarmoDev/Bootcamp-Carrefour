<!DOCTYPE php>
<html lang='pt-br'>

    <head>
        <title>Meu primeiro site PHP!Hello world!</title>

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

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
        <?php
            for ( $i = 0; $i < 10; $i++) {
                print("<span class=\"linha\">Linha número " . $i . "</span></br>");
            }
        ?>
    </body>

    <script type="text/javascript">
        $(document).ready(function() {
            alert("Woohoo!");
        });
    </script>

</html>