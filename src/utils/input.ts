export function focusToNextInput(target: HTMLElement) {
  const nextElementSibling =
    target.nextElementSibling as HTMLInputElement | null;

  if (nextElementSibling) {
    nextElementSibling.focus();
  }
}
export function focusToPrevInput(target: HTMLElement) {
  const previousElementSibling =
    target.previousElementSibling as HTMLInputElement | null;

  if (previousElementSibling) {
    previousElementSibling.focus();
  }
}

export function handleChange(
  target: HTMLInputElement,
  value: string,
  stringLength: number
) {
  const start = target.selectionStart as number;
  const end = target.selectionEnd as number;
  updateInputValue(target, value, start, end, stringLength);
  focusInput(target, value.length + start, stringLength);
}
export function updateInputValue(
  target: HTMLInputElement,
  extraValue: string,
  start: number,
  end: number,
  stringLength: number
) {
  const newValue = `${target.value.substring(
    0,
    start
  )}${extraValue}${target.value.substring(end, stringLength)}`;
  target.value = newValue.substring(0, stringLength);
  if (newValue.length > stringLength) {
    const next = target.nextElementSibling as HTMLInputElement;
    if (next == null) return;
    updateInputValue(
      next,
      newValue.substring(stringLength),
      0,
      0,
      stringLength
    );
  }
}
export function focusInput(
  input: HTMLInputElement,
  dataLength: number,
  stringLength: number
) {
  let addedChars = dataLength;
  let currentInput = input;
  while (addedChars > stringLength && currentInput.nextElementSibling != null) {
    addedChars -= stringLength;
    currentInput = currentInput.nextElementSibling as HTMLInputElement;
  }
  if (addedChars > stringLength) addedChars = stringLength;

  currentInput.focus();
  currentInput.selectionStart = addedChars;
  currentInput.selectionEnd = addedChars;
}
export function handleInputKeyDown(
  e: React.KeyboardEvent<HTMLInputElement>,
  stringLength: number
) {
  const target = e.target as HTMLInputElement;
  const key = e.key;

  if (e.ctrlKey || e.altKey) return;

  if (key === "ArrowRight" || key === "ArrowDown") {
    if (
      target.selectionStart === target.value.length &&
      target.selectionEnd === target.value.length
    ) {
      const next = target.nextElementSibling as HTMLInputElement;
      if (next && next.localName === "input") {
        focusToNextInput(target);
        next.selectionStart = 1;
        next.selectionEnd = 1;
        e.preventDefault();
      }
    }
    return;
  }

  if (key === "ArrowLeft" || key === "ArrowUp") {
    if (target.selectionStart === 0 && target.selectionEnd === 0) {
      const prev = target.previousElementSibling as HTMLInputElement;
      // prev.focus()
      if (prev && prev.localName === "input") {
        focusToPrevInput(target);
        prev.selectionStart = prev.value.length - 1;
        prev.selectionEnd = prev.value.length - 1;
        e.preventDefault();
      }
    }
    return;
  }
  if (key === "Backspace") {
    if (target.selectionStart === 0 && target.selectionEnd === 0) {
      const prev = target.previousElementSibling as HTMLInputElement | null;
      if (prev && prev.localName === "input") {
        prev.value = prev.value.substring(0, prev.value.length - 1);
        focusToPrevInput(target);
        prev.selectionStart = prev.value.length;
        prev.selectionEnd = prev.value.length;
        e.preventDefault();
      }
    }
    return;
  }
  if (key === "Delete") {
    if (
      target.selectionStart === target.value.length &&
      target.selectionEnd === target.value.length
    ) {
      const next = target.nextElementSibling as HTMLInputElement | null;
      if (next && next.localName === "input") {
        next.value = next.value.substring(1, next.value.length);
        focusToNextInput(target);
        next.selectionStart = 0;
        next.selectionEnd = 0;
        e.preventDefault();
      }
    }
  }
  if (key.length > 1) return;
  if (key.match(/^[^0-9]$/)) return e.preventDefault();
  e.preventDefault();

  handleChange(target, key, stringLength);
}
export function handleInputPaste(
  e: React.ClipboardEvent<HTMLInputElement>,
  stringLength: number
) {
  const input = e.target as HTMLInputElement;
  const data = e.clipboardData.getData("text");
  if (!data.match(/^[0-9]+$/)) return e.preventDefault();

  e.preventDefault();
  handleChange(input, data, stringLength);
}
