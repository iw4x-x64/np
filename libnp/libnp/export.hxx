#pragma once

#if defined(LIBNP_STATIC)
#  define LIBNP_SYMEXPORT
#elif defined(LIBNP_STATIC_BUILD)
#  define LIBNP_SYMEXPORT
#elif defined(LIBNP_SHARED)
#  ifdef _WIN32
#    define LIBNP_SYMEXPORT __declspec(dllimport)
#  else
#    define LIBNP_SYMEXPORT
#  endif
#elif defined(LIBNP_SHARED_BUILD)
#  ifdef _WIN32
#    define LIBNP_SYMEXPORT __declspec(dllexport)
#  else
#    define LIBNP_SYMEXPORT
#  endif
#else
// If none of the above macros are defined, then we assume we are being used
// by some third-party build system that cannot/doesn't signal the library
// type being linked.
//
#  error define LIBNP_STATIC or LIBNP_SHARED preprocessor macro to signal libnp library type being linked
#endif
