# TS3_EnhancedClientList
Much more than only an enhanced client list for your Teamspeak3 server.

## Short description
TS3_EnhancedClientList creates detailed lists using the information written to the log files of the server. It currently provides a control section and four detailed tables that can either be included in an existing website or used with the provided web interface (index.html):
- Control section
- Client list
- Ban list
- Kick list
- Complaint list
- File upload list

## How does it work ?
The program needs the log files of the TS3 server (logging has to be enabled in the server settings - enabling all logging options is recommended). The log files are analyzed and the relevant information (e.g. Nicknames and IPs) is collected. After all log files are parsed a XML file is created which then is used for displaying the tables in the web interface or in your custom HTML.

## Current Features
### Multiple sortable tables
- Client list
- Ban list
- Kick list
- Complaint list
- File upload list

### Custom implementation or provided web interface
You can either use the provided web interface (index.html) or implement the control section and the different tables into you existing website (see "Install Instructions").

#### Control Section
- Rebuild the XML and reload the Table via a button.
- Complete rebuild of the XML via a button (useful when changing log directories or after an failed database migration).
- Timestamps of the XML creation (local time of the server and UTC).
- Count of the currently connected clients.
- Scroll to the client table position of an ID.
- Collapse all extended lists.
- Switch between sorting by first or last Connections.
- Navbar (fixed at the bottom of the page) which contains the following buttons (scroll buttons of not included tables won't appear):
  - Scroll back to top
  - Scroll to control section
  - Scroll to client table
  - Scroll to ban table
  - Scroll to kick table
  - Scroll to complaint table
  - Scroll to upload table

#### Client table layout and features

ID  | Nicknames                                                                     | Connections                                                                        | IPs                                             | Connections Count | Connected | Deleted
--- | ----------------------------------------------------------------------------- | :--------------------------------------------------------------------------------: | ----------------------------------------------- | ----------------- | --------- | -------
3   | Drumsticks<br />TotallyNotDrumsticks<br />Drumsticks (AFK)<br />Teamspeakuser | ( + 34 ) <br/ >2015-24-06 23:11:02<br />2013-03-11 19:46:07                        | ( + 6 )<br />88.888.888.75                      | 36                | true      | false
4   | Random User                                                                   | 2015-18-07 15:11:02<br />2015-18-07 13:56:25                                       | 99.999.999.31                                   | 2                 | false     | false
100 | Teamspeakuser                                                                 | ( - 1 )<br />2015-05-08 16:06:31<br />2015-05-08 10:13:54<br />2015-05-08 09:34:12 | ( - 1 )<br />12.345.678.90<br />217.000.000.000 | 3                 | false     | false

- Chronological nickname history without duplicates.
- Last and first connection time.
- Last IP.
- Expanding and Collapsing the Connections and the IPs list (expanding to a chronological list of all connections / IPs | collapsing back to the last and the first connections / the last IP).
  - The button shows how many entries will be shown / hidden.
- Connected flag which shows if a user is currently connected.
- Deleted flag which shows if the user got deleted (only works if this is logged --> user must be deleted while the server is running).

#### Ban table layout

Date and Time                                | Banned ID | Banned Nickname | Banned IP       | Banned by Nickname | Banned by ID | Reason  | Bantime
-------------------------------------------- | --------- | --------------- | --------------- | ------------------ | ------------ | ------- | -------
2015-07-28 13:32:32<br />(about 3 hours ago) | 12        | Drumsticks-Test | 111.222.333.444 | Drumsticks         | 3            | Testban | 1800

#### Kick table layout

Date and Time                                    | Kicked ID | Kicked Nickname   | Kicked by Nickname | Kicked by UID       | Reason
------------------------------------------------ | --------- | ----------------- | ------------------ | ------------------- | --------
2015-04-23 15:22:39<br/>(about three months ago) | 285       | TrollingTrollUser | Drumsticks         | XXXXXXXXXXXXXXXXXX= | Trolling

#### Complaint table layout

Date and Time                           | About Nickname | About ID | Reason                   | By Nickname            | By ID
--------------------------------------- | -------------- | -------- | ------------------------ | ---------------------- | -----
2015-08-11 18:09:17 (about 12 days ago) | Obvious Troll  | 18       | Massive Spamming         | Random Communitymember | 14
2015-08-11 18:15:17 (about 12 days ago) | Obvious Troll  | 18       | Spamming in channel chat | xXHaXxXorXx            | 19

#### File upload table layout

Date and Time                               | Channel ID | Filename                          | Uploaded by Nickname | Uploaded by ID
------------------------------------------- | ---------- | --------------------------------- | -------------------- | --------------
2015-07-09 19:17:58<br />(about 4 days ago) | 2          | /file_sample.txt                  | Drumsticks           | 3
2015-07-09 19:18:18<br />(about 4 days ago) | 2          | /directory_sample/file_sample.txt | Drumsticks           | 3

### Overall Program Features
- You can change the virtual server whose logs will be analyzed by adjusting the value of  the VIRTUALSERVER variable in the rebuildXML.php.
- You can manually create a logignore and list the log files (one each line) that you want to be ignored (e.g. invalid logs as result of a messed up database migration following a reset to the last backup state).
- In order to save time the program uses the information from the last created XML instead of parsing all logs again.
- Lockfile: Only one instance of the program can run at once.
  - If a lockfile is older that 5 minutes it is deleted when running the program.<br />This prevents problems caused by lockfiles remaining when the program is terminated manually / an uncaught exception occurs.
- Log file containing the console output of the last program run.

### Planned Features
See the latest todo.h for planned features.

### It does not contain and never will
Any information that isn't logged.

## Installation
As the file name already implies, the install instructions can be found in the file "Install Instructions".<br /> For now there are only installation instructions available for Linux but experienced users should still be able to set it up on Windows by following the Linux steps (I can't provide support for Mac as I didn't yet work with it, but this may change in the future).<br /><br/> NOTE: Compiled files for Linux and Windows can be downloaded via the release tab on GitHub since v1.3.0 (TS3_EnhancedClientList.gz for Linux and TS3_EnhancedClientList.exe.gz for Windows).

### Dependencies
All dependencies are covered in the install instructions.<br /> You will need to download the following extern files:
- jQuery:
  - [jquery-2.1.4.min.js](https://code.jquery.com/jquery-2.1.4.min.js)
- Two files from [this fork](https://mottie.github.io/tablesorter/docs/) for the jquery plugin "tablesorter":
  - [jquery.tablesorter.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.22.5/js/jquery.tablesorter.widgets.js)
  - [jquery.tablesorter.widgets.min.js](https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.22.5/js/jquery.tablesorter.widgets.min.js)
- One file for the loading bar:
  - [nanobar.min.js](https://raw.githubusercontent.com/jacoborus/nanobar/master/nanobar.min.js)
- One file for moment.js:
  - [moment.min.js](https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js)

#### Teamspeak 3 server settings
It is recommended to enable all logging options in the server options.<br />
Otherwise you can enable the logging options according to the tables you use (e.g. complaints have to be logged for the complaint table).

## Support
If there are any problems, improvement suggestions or feature requests feel free to open an Issue on GitHub.
