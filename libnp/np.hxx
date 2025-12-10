#pragma once

#include <iosfwd>
#include <string>

#include <libnp/export.hxx>

namespace np
{
  // Print a greeting for the specified name into the specified
  // stream. Throw std::invalid_argument if the name is empty.
  //
  LIBNP_SYMEXPORT void
  say_hello (std::ostream&, const std::string& name);
}
