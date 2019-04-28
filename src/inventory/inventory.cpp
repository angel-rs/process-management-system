#include <nan.h>

NAN_METHOD(Inventory) {
  auto message = Nan::New("Hello from Inventory!").ToLocalChecked();
  info.GetReturnValue().Set(message);
}
