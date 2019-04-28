#include <nan.h>

NAN_METHOD(Accounting) {
  auto message = Nan::New("Hello from Accounting!").ToLocalChecked();
  info.GetReturnValue().Set(message);
}
