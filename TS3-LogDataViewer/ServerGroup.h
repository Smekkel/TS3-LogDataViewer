// ServerGroup.h
// Author : Drumsticks1
// GitHub : https://github.com/Drumsticks1/TS3-LogDataViewer
#pragma once

#include <vector>
#include <string>

// Class for the server group data.
class ServerGroup {
private:
	unsigned int ID = 0;
	std::string ServerGroupName, CreationDateTime;
	std::vector <unsigned int> MemberID;
	std::vector <std::string> AssignmentDateTime;
	bool deleted = false;

public:
	void addServerGroupInformation(unsigned int ID, std::string ServerGroupName, std::string CreationDateTime);
	void renameServerGroup(std::string newServerGroupName);

	unsigned int getMemberIDCount();

	unsigned int getUniqueMemberID(unsigned int MemberIDNumber);

	void addMemberID(unsigned int MemberID);
	void removeMemberID(unsigned int MemberID);
	
	unsigned int getID();
	std::string getServerGroupName();
	std::string getCreationDateTime();

	void deleteServerGroup();
	bool isDeleted();
};
