import java.util.Arrays;
class Product{
    int ID;
    String name;
    double price;

    Product(int ID, String name, double price) {
        this.ID = ID;
        this.name = name;
        this.price = price;
    }

    @Override
    public String toString() {
        return ID + ": " + name + " ($" + price + ")";
    }
}
class Search{
    static Product linearSearch(Product[] products, int targetedID){
        for(Product prdt : products){
            if(prdt.ID == targetedID){
                return prdt;
            }
        }
        return null;
    }
    static Product binarySearch(Product[] products, int targetedID){
        int left = 0;
        int right = products.length - 1;
        while(left<=right){
            int mid= left+(right - left)/2;
            if(products[mid].ID == targetedID){
                return products[mid];
            } else if (products[mid].ID < targetedID) {
                left = mid + 1;
            }
            else{
                right = mid -1;
            }
        }
        return null;
    }
}
public class Ecommerce {
    public static void main(String[] args) {
        Product[] products = { new Product(1,"Car", 25.50),
                               new Product(2,"Bike", 22.09),
                               new Product(3,"Bicycle", 18.77)
        };

        System.out.println("Linear Search");
        Product a = Search.linearSearch(products,2);
        System.out.println(a !=null? "Product found: "+ a : "Product not found");

    System.out.println("Binary search");
    Arrays.sort(products, (x,y)-> x.ID- y.ID);
    a = Search.binarySearch(products,1);
        System.out.println(a !=null? "Product found: "+ a : "Product not found");
    }
}
