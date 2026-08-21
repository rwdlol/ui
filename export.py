#!/usr/bin/env python3
from pathlib import Path

OUTPUT_FILE = Path("project_dump.md")

INCLUDE_DIRS = [
    Path("."),
]

EXCLUDE_DIRS = {
    "node_modules",
    "dist",
    ".git",
    ".astro",
}

LANG_MAP = {
    "astro": "astro",
    "ts": "typescript",
    "tsx": "tsx",
    "js": "javascript",
    "jsx": "jsx",
    "css": "css",
    "scss": "scss",
    "html": "html",
    "json": "json",
    "md": "markdown",
    "mdx": "mdx",
    "yml": "yaml",
    "yaml": "yaml",
    "xml": "xml",
    "svg": "svg",
    "txt": "text",
    "env": "dotenv",
}


def is_binary(path: Path) -> bool:
    """Check if a file contains null bytes (binary check)."""
    try:
        with open(path, "rb") as f:
            chunk = f.read(8192)
            return b"\0" in chunk
    except OSError:
        return True


def should_include_file(file_path: Path) -> tuple[bool, str]:
    filename = file_path.name

    # Handle .env* files
    if filename.startswith(".env"):
        return True, "dotenv"

    # Skip other hidden files
    if filename.startswith("."):
        return False, ""

    # Check extension
    ext = file_path.suffix.lstrip(".").lower()
    if ext in LANG_MAP:
        return True, LANG_MAP[ext]

    return False, ""


def generate_dump():
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        out.write("# Project Dump\n\n")

        for base_dir in INCLUDE_DIRS:
            if not base_dir.is_dir():
                continue

            for file_path in sorted(base_dir.rglob("*")):
                # Prune excluded directories
                if any(part in EXCLUDE_DIRS for part in file_path.parts):
                    continue

                if not file_path.is_file():
                    continue

                # Normalise display path to match bash './...' style
                display_path = f"./{file_path.as_posix()}" if not str(file_path).startswith("./") else file_path.as_posix()

                include, lang = should_include_file(file_path)
                if not include:
                    continue

                if is_binary(file_path):
                    out.write(f"## {display_path}\n\n**Binary file omitted**\n\n")
                    continue

                try:
                    content = file_path.read_text(encoding="utf-8", errors="replace")
                except OSError as e:
                    print(f"Warning: Could not read {file_path}: {e}")
                    continue

                out.write("============================================================\n")
                out.write(f"FILE: {display_path}\n")
                out.write("============================================================\n\n")
                out.write(f"```{lang}\n")
                out.write(content)
                if not content.endswith("\n"):
                    out.write("\n")
                out.write("```\n\n")

    print("\n✅ Done!")
    print(f"Created: {OUTPUT_FILE}")


if __name__ == "__main__":
    generate_dump()