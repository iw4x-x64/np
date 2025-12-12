#pragma once

#if defined(LIBNP_MOD_STATIC)
#  define LIBNP_MOD_SYMEXPORT
#elif defined(LIBNP_MOD_STATIC_BUILD)
#  define LIBNP_MOD_SYMEXPORT
#elif defined(LIBNP_MOD_SHARED)
#  ifdef _WIN32
#    define LIBNP_MOD_SYMEXPORT __declspec (dllimport)
#  else
#    define LIBNP_MOD_SYMEXPORT
#  endif
#elif defined(LIBNP_MOD_SHARED_BUILD)
#  ifdef _WIN32
#    define LIBNP_MOD_SYMEXPORT __declspec (dllexport)
#  else
#    define LIBNP_MOD_SYMEXPORT
#  endif
#else
// If none of the above macros are defined, then we assume we are being used
// by some third-party build system that cannot/doesn't signal the library
// type being linked.
//
#  error define LIBNP_MOD_STATIC or LIBNP_MOD_SHARED preprocessor macro to signal libnp-mod library type being linked
#endif
