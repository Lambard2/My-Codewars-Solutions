// https://www.codewars.com/kata/546f922b54af40e1e90001da
using System;
using System.Text;
using System.Collections.Generic;
public static class Kata
{
  
  
  public static string AlphabetPosition(string text)
  {
    Encoding ascii = Encoding.ASCII;
    Byte[] encodedBytes = ascii.GetBytes(text);
    List<string> result = new List<string>();
    string res = "";
    foreach(Byte b in encodedBytes)
    {
      if(b > 64 && b < 91)
        res+= $"{b-64} ";
      if(b > 96 && b < 123)
        res+= $"{b-96} ";
    }
    return res.Trim();
  }
}