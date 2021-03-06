// checkFunctions.js: Control Functions.
// Author : Drumsticks
// GitHub : https://github.com/Drumsticks1/TS3-LogDataViewer

"use strict";
const globalVariables = require("./globalVariables.js");

var ClientList = globalVariables.ClientList,
  BanList = globalVariables.BanList,
  KickList = globalVariables.KickList,
  ComplaintList = globalVariables.ComplaintList,
  UploadList = globalVariables.UploadList,
  Logs = globalVariables.Logs,
  ignoredLogs = globalVariables.ignoredLogs;

module.exports = {
  /**
   * Checks if a ServerGroup is already existing in the Client ServerGroupListID vector.
   * @param {number} clientID
   * @param {number} serverGroupID
   * @returns {boolean}
   */
  isDuplicateServerGroup: function (clientID, serverGroupID) {
    for (var i = 0; i < ClientList[clientID].getServerGroupIDCount(); i++) {
      if (ClientList[clientID].getServerGroupIDByID(i) == serverGroupID) {
        return true;
      }
    }
    return false;
  },

  /**
   * Checks if a Connection is already existing for the current client.
   * @param {number} ID
   * @param {string} Connection
   * @returns {boolean}
   */
  isDuplicateConnection: function (ID, Connection) {
    for (var i = 0; i < ClientList[ID].getConnectionCount(); i++) {
      if (ClientList[ID].getConnectionByID(i) == Connection) {
        return true;
      }
    }
    return false;
  },

  /**
   * Checks if the log is existing in the ignoredLogs array.
   * @param {string} log
   * @returns {boolean}
   */
  isIgnoredLog: function (log) {
    for (var i = 0; i < ignoredLogs.length; i++) {
      if (log == ignoredLogs[i])
        return true;
    }
    return false;
  },

  /**
   * Checks if the order of old logs and new logs as well as the ignored flags are matching.
   * @param {Array} newLogObjects array containing log objects (see fetchLogs)
   * @returns {boolean}
   */
  isMatchingLogOrder: function (newLogObjects) {
    for (var i = 0; i < Logs.length; i++) {
      if (i < newLogObjects.length) {
        if (Logs[i].logName != newLogObjects[i].logName || Logs[i].ignored != this.isIgnoredLog(newLogObjects[i].logName)) {
          return false;
        }
      }
      else return false;
    }
    return true;
  },

  /**
   * Checks if the two ban rules are matching with a ban disconnect.
   * @param {string} bannedByNickname
   * @param {string} banReason
   * @param {number} banTime
   * @param {string} lastUIDBanRule
   * @param {string} lastIPBanRule
   * @returns {boolean}
   */
  isMatchingBanRules: function (bannedByNickname, banReason, banTime, lastUIDBanRule, lastIPBanRule) {
    var UID = lastUIDBanRule, IP = lastIPBanRule;
    if (bannedByNickname == "Server")
      bannedByNickname = "server";

    if (UID.indexOf(" by client '" + bannedByNickname + "'(") != -1 && IP.indexOf(" by client '" + bannedByNickname + "'(") != -1) {
      if (UID.indexOf("ban added reason='" + banReason + "' cluid='") != -1 && IP.indexOf("ban added reason='" + banReason + "' ip='") != -1) {
        if (UID.indexOf("bantime=" + banTime + " ") != -1 && IP.indexOf("bantime=" + banTime + " ") != -1) {
          return true;
        }
      }
    }
    return false;
  },

  /**
   * Checks if a ban is already existing in the BanList.
   * @param {string} banDateTime
   * @param {number} bannedID
   * @param {string} bannedNickname
   * @param {string} bannedUID
   * @param {string} bannedIP
   * @param {number} bannedByID
   * @param {string} bannedByNickname
   * @param {string} bannedByUID
   * @param {string} banReason
   * @param {number} banTime
   * @returns {boolean}
   */
  isDuplicateBan: function (banDateTime, bannedID, bannedNickname, bannedUID, bannedIP, bannedByID, bannedByNickname, bannedByUID, banReason, banTime) {
    for (var i = 0; i < BanList.length; i++) {
      if (BanList[i].getBanDateTime() == banDateTime && BanList[i].getBannedID() == bannedID && BanList[i].getBannedNickname() == bannedNickname &&
        BanList[i].getBannedUID() == bannedUID && BanList[i].getBannedIP() == bannedIP && BanList[i].getBannedByID() == bannedByID &&
        BanList[i].getBannedByNickname() == bannedByNickname && BanList[i].getBannedByUID() == bannedByUID && BanList[i].getBanReason() == banReason &&
        BanList[i].getBanTime() == banTime)
        return true;
    }
    return false;
  },

  /**
   * Checks if a kick is already existing in the KickList.
   * @param {string} kickDateTime
   * @param {number} kickedID
   * @param {string} kickedNickname
   * @param {string} kickedByNickname
   * @param {string} kickedByUID
   * @param {string} kickReason
   * @returns {boolean}
   */
  isDuplicateKick: function (kickDateTime, kickedID, kickedNickname, kickedByNickname, kickedByUID, kickReason) {
    for (var i = 0; i < KickList.length; i++) {
      if (KickList[i].getKickDateTime() == kickDateTime && KickList[i].getKickedID() == kickedID && KickList[i].getKickedNickname() == kickedNickname &&
        KickList[i].getKickedByNickname() == kickedByNickname && KickList[i].getKickedByUID() == kickedByUID && KickList[i].getKickReason() == kickReason)
        return true;
    }
    return false;
  },

  /**
   * Checks if a complaint is already existing in the ComplaintList
   * @param {string} complaintDateTime
   * @param {string} complaintAboutNickname
   * @param {number} complaintAboutID
   * @param {string} complaintReason
   * @param {string} complaintByNickname
   * @param {number} complaintByID
   * @returns {boolean}
   */
  isDuplicateComplaint: function (complaintDateTime, complaintAboutNickname, complaintAboutID, complaintReason, complaintByNickname, complaintByID) {
    for (var i = 0; i < ComplaintList.length; i++) {
      if (ComplaintList[i].getComplaintDateTime() == complaintDateTime && ComplaintList[i].getComplaintAboutNickname() == complaintAboutNickname &&
        ComplaintList[i].getComplaintAboutID() == complaintAboutID && ComplaintList[i].getComplaintReason() == complaintReason &&
        ComplaintList[i].getComplaintByNickname() == complaintByNickname && ComplaintList[i].getComplaintByID() == complaintByID)
        return true;
    }
    return false;
  },

  /**
   * Checks if an upload is already existing in the UploadList.
   * @param {string} uploadDateTime
   * @param {number} channelID
   * @param {string} filename
   * @param {number} uploadedByID
   * @param {string} uploadedByNickname
   * @returns {boolean}
   */
  isDuplicateUpload: function (uploadDateTime, channelID, filename, uploadedByID, uploadedByNickname) {
    for (var i = 0; i < UploadList.length; i++) {
      if (UploadList[i].getUploadDateTime() == uploadDateTime && UploadList[i].getChannelID() == channelID && UploadList[i].getFilename() == filename &&
        UploadList[i].getUploadedByID() == uploadedByID && UploadList[i].getUploadedByNickname() == uploadedByNickname)
        return true;
    }
    return false;
  }
};