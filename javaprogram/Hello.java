import java.util.*;
class UserName{
public static void main(String[] Args)
{
    Scanner sc= new Scanner(System.in);
    System.out.println("Enter a UserName");
    String name = sc.nextLine();
    if(name.length() < 3)
    {
        System.out.println("please enter minimum 3 character");

    }
    else{
        System.out.println("user name is" +name);
    }
}
}
