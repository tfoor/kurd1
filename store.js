/* store.js — يقرأ بيانات صفحة التصميم من Appwrite (نفس الجدول اللي بيكتب عليه الأدمن) */
const SR = {
  ENDPOINT: "https://api.styleroj.com/v1",
  PROJECT: "6a9321f3002b6c1004a9",
  DATABASE: "6a93224c002e35f858b8",
  TABLE: "designer_options",
  WHATSAPP: "9647511429970",
  CUR: "$",
  money(v) { return SR.CUR + Number(v || 0).toFixed(2); },
  async load() {
    const client = new Appwrite.Client().setEndpoint(SR.ENDPOINT).setProject(SR.PROJECT);
    const db = new Appwrite.TablesDB(client);
    const rows = []; let off = 0;
    while (true) {
      const r = await db.listRows({
        databaseId: SR.DATABASE, tableId: SR.TABLE,
        queries: [Appwrite.Query.orderAsc("$createdAt"), Appwrite.Query.limit(100), Appwrite.Query.offset(off)]
      });
      const b = r.rows || r.documents || [];
      rows.push(...b);
      if (b.length < 100) break;
      off += 100;
    }
    const g = k => rows.filter(x => x.kind === k).map(x => ({ id: x.$id, name: x.name, price: +x.price || 0, hex: x.hex || "#f3b5c7", img: x.img || "" }));
    return { models: g("model"), colors: g("color"), fabrics: g("fabric"), kaftans: g("kaftan") };
  }
};