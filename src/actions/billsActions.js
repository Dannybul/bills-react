export const addBill = ({
  billId = "",
  billUrl = "",
  committees = "",
  billType = "",
  govTrackUrl = "",
  housePassage = "",
  introducedDate = "",
  lastMajorAction = "",
  lastMajorActionDate = "",
  shortTitle = "",
  sponsorId = "",
  sponsorName = "",
  sponsorParty = "",
  sponsorState = "",
  sponsorTitle = "",
  sponsorUri = "",
  summary = "",
  title = "",
  vetoed = false,
  subCommitteeCode = [],
} = {}) => {
  if (billId !== "") {
    return {
      type: "ADD_BILL",
      bill: {
        billId,
        billUrl,
        committees,
        billType,
        govTrackUrl,
        housePassage,
        introducedDate,
        lastMajorAction,
        lastMajorActionDate,
        shortTitle,
        sponsorId,
        sponsorName,
        sponsorParty,
        sponsorState,
        sponsorTitle,
        sponsorUri,
        summary,
        title,
        vetoed,
        subCommitteeCode,
      },
    };
  } else {
    return {
      type: "NotValid",
    };
  }
};
