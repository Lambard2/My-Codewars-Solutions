//https://www.codewars.com/kata/5511b2f550906349a70004e1
namespace Solution
{
  using System.Numerics;
  
  class LastDigit
  {
    public static int GetLastDigit(BigInteger n1, BigInteger n2)
    {
      return (int)BigInteger.ModPow(n1, n2, 10);
    }
  }
}