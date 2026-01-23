const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (!navigator.clipboard) {
      throw new Error('클립보드 API를 지원할 수 없습니다.');
    }

    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('복사에 실패했습니다.', error);
    return false;
  }
};

export default copyToClipboard;
