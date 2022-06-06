//https://www.codewars.com/kata/52e88b39ffb6ac53a400022e
public class Kata
{
  public static string UInt32ToIP(uint ip)
  {
    uint oct4 = ip % 256;
    uint oct3 = ip / 256 % 256;
    uint oct2 = ip / 256 / 256 % 256;
    uint oct1 = ip / 256 / 256 / 256 % 256;
    return $"{oct1}.{oct2}.{oct3}.{oct4}";
  }
}