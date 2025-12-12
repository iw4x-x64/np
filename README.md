# NP

```bash
bdep init -C @gcc cc \
  config.cxx=g++                   \
  config.install.root=/            \
  config.install.share=/usr/share/ \
  config.install.sudo=sudo         \
  config.cc.compiledb=./           \
  --wipe                           \
  --                               \
    ?sys:libapr1                   \
    ?sys:libapreq2
```
