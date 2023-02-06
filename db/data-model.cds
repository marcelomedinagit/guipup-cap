using {
  cuid,
  managed
} from '@sap/cds/common';

namespace guipup;

entity product : managed {
  key id                  : Integer;
      cohitech            : String;
      tarifCode           : String;
      moq                 : String;
      case_count          : String;
      cases_per_pallet    : String;
      gross               : String;
      total_height        : String;
      inches              : String;
      pallet_weight       : String;
      cases_per_container : String;
      pallets_loaded      : Boolean;
      container_lbs       : Boolean;
      fob_per_pack        : Boolean;
      trucking_barcelona  : Boolean;
      ofreight_cost       : Boolean;
      duties              : Boolean;
      duties_paid         : Boolean;
      ofreight_unit       : Boolean;
      pallets_cont        : Boolean;
}
