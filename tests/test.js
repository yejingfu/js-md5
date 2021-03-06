var module = md5;

describe(testName, function() {
  describe('ascii', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(module('')).to.be('d41d8cd98f00b204e9800998ecf8427e');
        expect(module('The quick brown fox jumps over the lazy dog')).to.be('9e107d9d372bb6826bd81d3542a419d6');
        expect(module('The quick brown fox jumps over the lazy dog.')).to.be('e4d909c290d0fb1ca068ffaddf22cbd0');
        expect(module('01234567801234567801234567801234567801234567801234567801234567801234567')).to.be('658d914ae42c4938874b2e786ccda479');
        expect(module('012345678012345678012345678012345678012345678012345678012345678012345678')).to.be('a083a3710d685793f1f17988bfe3c175');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(module('The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.')).to.be('f63872ef7bc97a8a8eadba6f0881de53');
      });
    });
  });

  describe('UTF8', function() {
    describe('less than 64 bytes', function() {
      it('should be successful', function() {
        expect(module('中文')).to.be('a7bac2239fcdcb3a067903d8077c4a07');
        expect(module('aécio')).to.be('ec3edbf3b05a449fc206a0138c739c3b');
        expect(module('𠜎')).to.be('b90869aaf121210f6c563973fa855650');
      });
    });

    describe('more than 64 bytes', function() {
      it('should be successful', function() {
        expect(module('訊息摘要演算法第五版（英語：Message-Digest Algorithm 5，縮寫為MD5），是當前電腦領域用於確保資訊傳輸完整一致而廣泛使用的雜湊演算法之一（又譯雜湊演算法、摘要演算法等），主流程式語言普遍已有MD5的實作。')).to.be('ad36c9ab669a0ba9ce46d3ce9134de34');
      });
    });
  });
});
