#pragma once

#include <iosfwd>
#include <string>

#include <libnp/mod/export.hxx>

namespace np
{
  namespace mod
  {
  // Print a greeting for the specified name into the specified
  // stream. Throw std::invalid_argument if the name is empty.
  //
    LIBNP_MOD_SYMEXPORT void
    say_hello (std::ostream&, const std::string& name);
  }
}
