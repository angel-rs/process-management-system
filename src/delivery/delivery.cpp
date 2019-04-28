#include <nan.h>

NAN_METHOD(Delivery) {
  auto message = Nan::New("Hello from Delivery!").ToLocalChecked();
  info.GetReturnValue().Set(message);
}
