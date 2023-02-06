using {
  cuid,
  managed
} from '@sap/cds/common';

namespace guipup;

entity product : managed {
  key id                  : Integer;
      cohitech            : String; //p
      tariffCode          : String; //p
      moq                 : String; //p
      origin              : String; //p
      caseCount           : Integer; //p
      casesPerPallet      : Integer; //p
      grossKg             : Decimal; //p
      palletTotalHeight   : Decimal; //p
      inches              : Decimal;
      palletWeight        : Integer;
      casesPerContainer   : Decimal;
      _40qtyPallets       : Decimal;
      containerLbs        : Decimal;
      fobPerPack          : Decimal;
      truckingBarcelona   : Decimal;
      oFreightCost        : Decimal;
      duties              : Decimal;
      dutiesToBePaid      : Decimal;
      customsBroker       : Decimal;
      oFreightCostUnit    : Decimal;
      palletsPerCont      : Decimal;
      containersPerYear   : Decimal;
      monthsForStorage    : Integer;
      contTransportNY     : Decimal;
      palletUnloadRec     : Decimal;
      fixedWarehPerCont   : Decimal;
      palletSlipSheet     : Decimal;
      wrapPerPallet       : Decimal;
      pickingNC           : Decimal;
      storagePerPalletNC  : Decimal;
      packSlipPerOrder    : Decimal;
      orderProcessing     : Decimal;
      totalWarehouse      : Decimal;
      totalLandedCost     : Decimal;
      buffer              : Decimal;
      HRSGlobalComm       : Decimal;
      priceToRetailer     : Decimal;
      notes               : Decimal;
      totalCasesinXPallet : Decimal;
      avgCHR135Pallet     : Decimal;
      lumperUnloadCharge  : Decimal;
      total               : Decimal;
      paymentTerms        : Decimal;
      dlvyCostPerUnit     : Decimal;
      totalDelivCost      : Decimal;
      factorExworks       : Decimal;
}
