// Client.js : Client class.
// Author : Drumsticks1
// GitHub : https://github.com/Drumsticks1/TS3-LogDataViewer

"use strict";

/**
 * Default constructor.
 * @constructor
 */
var Client = function() {
    this.ID = 0;
    this.ConnectedState = 0;
    this.ServerGroupID = [];
    this.DateTime = [];
    this.Nickname = [];
    this.IP = [];
    this.ServerGroupAssignmentDateTime = [];
    this.deleted = false;
};

// Returns the ID of the current client.
Client.prototype.getID = function() {
    return this.ID;
};

// Returns the count of the DateTime-/Nickname-/IP-entries of the current client.
Client.prototype.getDateTimeCount = function() {
    return this.DateTime.length;
};
Client.prototype.getNicknameCount = function() {
    return this.Nickname.length;
};
Client.prototype.getIPCount = function() {
    return this.IP.length;
};

// Returns the information stored in the given ID slot.
Client.prototype.getUniqueDateTime = function(DateTimeNumber) {
    return this.DateTime[DateTimeNumber];
};

Client.prototype.getUniqueNickname = function(NicknameNumber) {
    return this.Nickname[NicknameNumber];
};

Client.prototype.getUniqueIP = function(IPNumber) {
    return this.IP[IPNumber];
};

// Sets the given ID as client ID.
Client.prototype.addID = function(ID) {
    this.ID = ID;
};

// Adds the new Nickname at the beginning of the Nickname list.
Client.prototype.addNickname = function(Nickname) {
    for (var i = 0; i < this.Nickname.length; i++) {
        if (this.Nickname[i] == Nickname) {
            this.Nickname.splice(i, 1);
        }
    }
    this.Nickname.unshift(Nickname);
};

// Adds the new DateTime at the beginning of the DateTime list.
Client.prototype.addDateTime = function(DateTime) {
    this.DateTime.unshift(DateTime);
};

// Adds the new IP at the beginning of the IP list.
Client.prototype.addIP = function(IP) {
    for (var i = 0; i < this.IP.length; i++) {
        if (this.IP[i] == IP) {
            this.IP.splice(i, 1);
        }
    }
    this.IP.unshift(IP);
};

// Adjusts the ConnectedState.
Client.prototype.connect = function() {
    this.ConnectedState++;
};
Client.prototype.disconnect = function() {
    // Todo: Check if necessary.
    if (this.ConnectedState > 0)
        this.ConnectedState--;
};

// Resets the ConnectedState to 0.
Client.prototype.resetConnectedState = function() {
    this.ConnectedState = 0;
};

// Returns the CurrentConnectionsCount.
Client.prototype.getConnectedState = function() {
    return this.ConnectedState;
};

// Sets the Deleted flag to true.
Client.prototype.deleteClient = function() {
    this.deleted = true;
};

// Returns the deleted value.
Client.prototype.isDeleted = function() {
    return this.deleted;
};

//
Client.prototype.addServerGroup = function(ServerGroupID, ServerGroupAssignmentDateTime) {
    this.ServerGroupID.push(ServerGroupID);
    this.ServerGroupAssignmentDateTime.push(ServerGroupAssignmentDateTime);
};

//
Client.prototype.removeServerGroupByID = function(ServerGroupID) {
    var done = false;
    for (var i = 0; i < this.ServerGroupID.length && !done; i++) {
        if (this.getUniqueServerGroupID(i) == ServerGroupID) {
            this.ServerGroupID.splice(i, 1);
            this.ServerGroupAssignmentDateTime.splice(i, 1);
            done = true;
        }
    }
};

//
Client.prototype.getServerGroupIDCount = function() {
    return this.ServerGroupID.length;
};

//
Client.prototype.getUniqueServerGroupID = function(ServerGroupIDPos) {
    return this.ServerGroupID[ServerGroupIDPos];
};

//
Client.prototype.getServerGroupAssignmentDateTimeCount = function() {
    return this.ServerGroupAssignmentDateTime.length;
};

//
Client.prototype.getUniqueServerGroupAssignmentDateTime = function(ServerGroupAssignmentDateTimePos) {
    return this.ServerGroupAssignmentDateTime[ServerGroupAssignmentDateTimePos];
};

exports.Client = Client;