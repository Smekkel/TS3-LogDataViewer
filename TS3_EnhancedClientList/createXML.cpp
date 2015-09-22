// createXML.cpp : Creation of the XML.
// Author : Drumsticks1
// GitHub : https://github.com/Drumsticks1/TS3_EnhancedClientList

#include <iostream>
#include <string>
#include <vector>
#include "Constants.h"
#include "Client.h"
#include "Ban.h"
#include "Kick.h"
#include "Complaint.h"
#include "Upload.h"
#include "timeFunctions.h"
#include "customStreams.h"
#include <boost/property_tree/ptree.hpp>
#include <boost/property_tree/xml_parser.hpp>

using namespace std;
using namespace boost::property_tree;

extern vector <string> parsedLogs;
extern vector <Client> ClientList;
extern vector <Ban> BanList;
extern vector <Kick> KickList;
extern vector <Complaint> ComplaintList;
extern vector <Upload> UploadList;
extern unsigned int VIRTUALSERVER;
extern TeeStream outputStream;

// Creates a XML for storing the data extracted from the logs.
void createXML() {
	outputStream << "Preparing XML-Creation..." << endl;

	ptree PropertyTree;
	ptree& Data = PropertyTree.add("Data", "");
	ptree& AttributesNode = Data.add("Attributes", "");
	AttributesNode.add("Generated", "by TS3 Enhanced Client List");
	AttributesNode.add("VirtualServer", VIRTUALSERVER);

	AttributesNode.add("CreationTimestamp_Localtime", getCurrentLocaltime());
	AttributesNode.add("CreationTimestamp_UTC", getCurrentUTC());
	AttributesNode.add("SKIPLOCKFILE", SKIPLOCKFILE);

	ptree& ParsedLogs = AttributesNode.add("ParsedLogs", "");
	for (unsigned i = 0; i < parsedLogs.size(); i++) {
		ParsedLogs.add("P", parsedLogs[i]);
	}

	for (unsigned int i = 0; i < ClientList.size(); i++) {
		ptree& ClientNode = Data.add("Client", "");
		if (ClientList[i].getID() != 0) {
			ClientNode.add("ID", ClientList[i].getID());

			ptree& Nicknames = ClientNode.add("Nicknames", "");
			for (unsigned int j = 0; j < ClientList[i].getNicknameCount(); j++) {
				Nicknames.add("N", ClientList[i].getUniqueNickname(j));
			}

			ptree& Connections = ClientNode.add("Connections", "");
			for (unsigned int j = 0; j < ClientList[i].getDateTimeCount(); j++) {
				Connections.add("C", ClientList[i].getUniqueDateTime(j));
			}

			ptree& IPs = ClientNode.add("IPs", "");
			for (unsigned int j = 0; j < ClientList[i].getIPCount(); j++) {
				IPs.add("I", ClientList[i].getUniqueIP(j));
			}

			ClientNode.add("Connection_Count", ClientList[i].getDateTimeCount());
			ClientNode.add("Connected", ClientList[i].getConnectedState());
			ClientNode.add("Deleted", ClientList[i].isDeleted());
		}
		else ClientNode.add("ID", "-1");
	}

	for (unsigned int i = 0; i < BanList.size(); i++) {
		ptree& BanNode = Data.add("Ban", "");
		BanNode.add("BanDateTime", BanList[i].getBanDateTime());
		BanNode.add("BannedID", BanList[i].getBannedID());
		BanNode.add("BannedNickname", BanList[i].getBannedNickname());
		BanNode.add("BannedUID", BanList[i].getBannedUID());
		BanNode.add("BannedIP", BanList[i].getBannedIP());
		BanNode.add("BannedByNickname", BanList[i].getBannedByNickname());
		BanNode.add("BannedByID", BanList[i].getBannedByID());
		BanNode.add("BannedByUID", BanList[i].getBannedByUID());
		BanNode.add("BanReason", BanList[i].getBanReason());
		BanNode.add("Bantime", BanList[i].getBantime());
	}

	for (unsigned int i = 0; i < KickList.size(); i++) {
		ptree& KickNode = Data.add("Kick", "");
		KickNode.add("KickDateTime", KickList[i].getKickDateTime());
		KickNode.add("KickedID", KickList[i].getKickedID());
		KickNode.add("KickedNickname", KickList[i].getKickedNickname());
		KickNode.add("KickedByNickname", KickList[i].getKickedByNickname());
		KickNode.add("KickedByUID", KickList[i].getKickedByUID());
		KickNode.add("KickReason", KickList[i].getKickReason());
	}

	for (unsigned int i = 0; i < ComplaintList.size(); i++) {
		ptree& ComplaintNode = Data.add("Complaint", "");
		ComplaintNode.add("ComplaintDateTime", ComplaintList[i].getComplaintDateTime());
		ComplaintNode.add("ComplaintAboutNickname", ComplaintList[i].getComplaintAboutNickname());
		ComplaintNode.add("ComplaintAboutID", ComplaintList[i].getComplaintAboutID());
		ComplaintNode.add("ComplaintReason", ComplaintList[i].getComplaintReason());
		ComplaintNode.add("ComplaintByNickname", ComplaintList[i].getComplaintByNickname());
		ComplaintNode.add("ComplaintByID", ComplaintList[i].getComplaintByID());
	}

	for (unsigned int i = 0; i < UploadList.size(); i++) {
		ptree& UploadNode = Data.add("Upload", "");
		UploadNode.add("UploadDateTime", UploadList[i].getUploadDateTime());
		UploadNode.add("ChannelID", UploadList[i].getChannelID());
		UploadNode.add("Filename", UploadList[i].getFilename());
		UploadNode.add("UploadedByNickname", UploadList[i].getUploadedByNickname());
		UploadNode.add("UploadedByID", UploadList[i].getUploadedByID());
		UploadNode.add("DeletedByNickname", UploadList[i].getDeletedByNickname());
		UploadNode.add("DeletedByID", UploadList[i].getDeletedByID());
	}

	outputStream << "Creating XML..." << endl;

	try {
		write_xml(XMLFILE, PropertyTree);
		outputStream << "XML Creation completed." << endl;
	}
	catch (xml_parser_error error) {
		outputStream << "An error occured while creating the xml:" << endl << error.what() << endl;
	}
}
