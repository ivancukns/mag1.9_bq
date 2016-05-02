<?php
class Brisqq_Cart_Block_Mymodule extends Mage_Core_Block_Template
{
    public function myfunction()
    {
    	echo "Current items in your cart: <br>";	
		$cart = Mage::getModel('checkout/cart')->getQuote();
		foreach ($cart->getAllItems() as $item) {
		    $productName = $item->getProduct()->getName();
		    $productPrice = $item->getProduct()->getPrice();
		    $productQty = $item->getQty();
		    echo 'Product name: ' . $productName . '<br>' . 'Product price:' . $productPrice . '<br>' . 'Quantity: ' . $productQty;
		}
    }
    public function methodBlock()
   {
      $html = file_get_contents('http://local.mag19.com/integration/index.html');

      echo '<iframe frameBorder="0" src="http://local.mag19.com/integration/index.html"></iframe>';
   }

}
?>