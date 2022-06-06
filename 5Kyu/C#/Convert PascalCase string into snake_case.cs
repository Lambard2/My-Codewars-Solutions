//https://www.codewars.com/kata/529b418d533b76924600085d
using System;
public static class Kata 
{
  public static string ToUnderscore(int str) 
  {
    return Convert.ToString(str);
  }

  public static string ToUnderscore(string str) 
  {
    string res = "";
    for(int i = 0; i<str.Length;i++)
    {
      if(i == 0)
      {
        res += Char.ToLower(str[i]);
      }
      else if(Char.IsDigit(str[i]))
      {
        res += str[i];
      }
      else if(str[i] == Char.ToUpper(str[i]))
      {
        res += "_"+Char.ToLower(str[i]);
      }
      else
      {
        res += str[i];
      }
    }
    return res;
  }
}