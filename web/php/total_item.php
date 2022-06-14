<i class="fas fa-shopping-cart"></i> Cart
    <?php

    if (isset($_SESSION['cart'])){
        $count = count($_SESSION['cart']);
            echo "<span id=\"cart_count\" class=\"text-warning bg-light\">$count</span>";
        }else{
            echo "<span id=\"cart_count\" class=\"text-warning bg-light\">0</span>";
        }
?>