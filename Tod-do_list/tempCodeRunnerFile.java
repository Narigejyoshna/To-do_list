import java.util.Scanner;
class D
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int a=0;
        int b=1;
        while(2<=n)
        {
        int sum=a+b;
        int t=sum;
        a=b;
        System.out.println(a+""+b);
        }
        
    }
}