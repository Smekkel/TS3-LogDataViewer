// globalVariables.js
// Author : Drumsticks1
// GitHub : https://github.com/Drumsticks1/TS3-LogDataViewer

const Constants = require("./Constants.js");

var ignoredLogs = [],
    Logs = [],
    parsedLogs = [],
    ClientList = [],
    ServerGroupList = [],
    BanList = [],
    KickList = [],
    ComplaintList = [],
    UploadList = [],
    ChannelList = [],
    programLogfile = Constants.programLogfile,
    virtualServer = Constants.virtualServer,
    logDirectory = Constants.logDirectory,
    bufferData = Constants.bufferData,
    timeBetweenRebuilds = Constants.timeBetweenRebuilds,
    usedPort = Constants.usedPort;

module.exports = {
    ignoredLogs: ignoredLogs,
    Logs: Logs,
    parsedLogs: parsedLogs,
    ClientList: ClientList,
    ServerGroupList: ServerGroupList,
    BanList: BanList,
    KickList: KickList,
    ComplaintList: ComplaintList,
    UploadList: UploadList,
    ChannelList: ChannelList,
    programLogfile: programLogfile,
    virtualServer: virtualServer,
    logDirectory: logDirectory,
    bufferData: bufferData,
    timeBetweenRebuilds: timeBetweenRebuilds,
    usedPort: usedPort
};