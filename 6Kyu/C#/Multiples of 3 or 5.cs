//https://www.codewars.com/kata/514b92a657cdc65150000006
public static class Kata
{
  public static int Solution(int value)
  {
    int SumOf3 = 0;
    int SumOf5 = 0;
    int Sum = 0;
    for(int i = 1; i<=(value-1)/3; i++)
    {
      SumOf3 += 3*i;
    }
    for(int i = 1; i<=(value-1)/5; i++)
    {
      SumOf5 += 5*i;
    }
    for(int i = 1; i<=(value-1)/15; i++)
    {
      SumOf5 -= 15*i;
    }
    
    Sum = SumOf5 + SumOf3;
    return Sum;
  }
}