#include "accounting/accounting.cpp"
#include "catering/catering.cpp"
#include "delivery/delivery.cpp"
#include "ecommerce/ecommerce.cpp"
#include "inventory/inventory.cpp"

// REFERENCE MATERIAL
// https://github.com/justadudewhohacks/node-addon-tutorial/blob/master/AsyncWorkers/src/MyAsyncBinding.cc
// https://github.com/justadudewhohacks/node-addon-tutorial

// C++ Module Initialization
NAN_MODULE_INIT(Initialize) {
  // Export all of the processes functions
  NAN_EXPORT(target, Accounting);
  NAN_EXPORT(target, Catering);
  NAN_EXPORT(target, Delivery);
  NAN_EXPORT(target, Ecommerce);
  NAN_EXPORT(target, Inventory);
}

NODE_MODULE(addon, Initialize)
