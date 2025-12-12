#pragma once

namespace np
{
  namespace mod
  {
    // HTTP request interface.
    //
    class request
    {
    public:
      virtual
      ~request () = 0;
    };

    // Handler interface.
    //
    class handler
    {
    public:
      virtual
      ~handler () = 0;
    };
  }
}
