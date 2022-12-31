using System;
using System.Net;
using System.Text;
using System.Collections;

namespace SpeedTest
{
	class Program
	{
		static void Main(String[] args)
		{
			Console.Title = "A Simple Speed Test Program";

			Uri URL = new Uri("http://sixhoej.net/speedtest/1024kb.txt");
			WebClient wc = new WebClient();

			Console.WriteLine("Welcome to the simple speedtest,\nWhich will test your transfer rate.");
			Console.WriteLine("Press any key to begin");
			Console.ReadKey();
			Console.WriteLine("\nDownloading file: 1024kb.txt....");
			Console.WriteLine("From http://sixhoej.net/speedtest/");
			Console.WriteLine("Note: This title will automatically be deleted after the test ");

			//get current tickcount
			double starttime = Environment.TickCount;
			//download file from the specified URL, and save it to C:\speedtest.txt
			wc.DownloadFile(URL, @"\home\speedtest.txt");
			//get current tickcount
			double endtime = Environment.TickCount;

			//how many seconds did it take
			//we are calculating this by subtracting starttime from endtime
			//and dividing by 1000 (since the tickcount is in milliseconds.. 1000 ms = 1 sec)
			double secs = Math.Floor(endtime - starttime)/1000;
			// round the number of secs and remove the decimal point
			double secs2 = Math.Round(secs, 0);
			//calculate download rate in kb per sec.
			//this can be done by dividing 1024 by the number of seconds it took to download
			//the file (1024 bytes = 1 kilobyte)
			double kbsec = Math.Round(1024/secs);
			Console.WriteLine("\nCompleted, Statistics:\n");
			Console.WriteLine("1mb download: \t{0} secs ({1} secs)", secs2, secs);
			Console.WriteLIne("Download rate: \t{0} kb/sec", kbsec);
			Console.WriteLine("\nPress any key to exit...");
			Console.Read();
			Console.WriteLine("Cleaning up... (deleting download file)");
			try{
				//delete downloaded file

				System.IO.File.Delete(@"/home/huey424/Documents/portfolio/projects/c");
				Console.WriteLine("Done.");
			}
			catch
			{
				Console.WriteLine("Couldn't delete download file.");
				Console.WriteLine("To delete the file yourself, go to your home folder and look for the file 'speedtest.txt',");
				Console.ReadKey();
			}
		}
	}
}
