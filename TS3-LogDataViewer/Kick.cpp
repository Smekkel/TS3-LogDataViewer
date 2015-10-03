// Kick.cpp : Methods of the Kick class.
// Author : Drumsticks1
// GitHub : https://github.com/Drumsticks1/TS3-LogDataViewer

#include <iostream>
#include <vector>
#include <string>
#include "Kick.h"

using namespace std;

vector <Kick> KickList;

// Sets the data of the current Kick object according to the given data.
void Kick::addKick(string kickDateTime, unsigned int kickedID, string kickedNickname, string kickedByNickname, string kickedByUID, string kickReason) {
	this->kickDateTime = kickDateTime;
	this->kickedID = kickedID;
	this->kickedNickname = kickedNickname;
	this->kickedByNickname = kickedByNickname;
	this->kickedByUID = kickedByUID;
	this->kickReason = kickReason;
}

// Returns the requested information.
string Kick::getKickDateTime() { return kickDateTime; }
unsigned int Kick::getKickedID() { return kickedID; }
string Kick::getKickedNickname() { return kickedNickname; }
string Kick::getKickedByNickname() { return kickedByNickname; }
string Kick::getKickedByUID() { return kickedByUID; }
string Kick::getKickReason() { return kickReason; }