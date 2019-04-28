#include <nan.h>

NAN_METHOD(Ecommerce) {
  auto message = Nan::New("Hello from Ecommerce!").ToLocalChecked();
  info.GetReturnValue().Set(message);
}
