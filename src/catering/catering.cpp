#include <nan.h>

NAN_METHOD(Catering) {
  auto message = Nan::New("Hello from Catering!").ToLocalChecked();
  info.GetReturnValue().Set(message);
}
