interface Document{
    void open();
    void save();
    void close();
}
class WordDocument implements Document{
    public void open(){
        System.out.println("Opening word document");
    }
    public void save(){
        System.out.println("Saving word document");
    }
    public void close(){
        System.out.println("Closing word document");
    }
}
class Pdf implements Document{
    public void open(){
        System.out.println("Opening PDF");
    }
    public void save(){
        System.out.println("Saving PDF");
    }
    public void close(){
        System.out.println("Closing PDF");
    }
}
class Excel implements Document{
    public void open(){
        System.out.println("Opening Excel sheet");
    }
    public void save(){
        System.out.println("Saving Excel sheet");
    }
    public void close(){
        System.out.println("Closing Excel sheet");
    }
}
abstract class DocumentTypes{
    public abstract Document createDocument();
    public void processDocs(){
    Document doc = createDocument();
    doc.open();
    doc.save();
    doc.close();
    }
}
class WordDocumentTypes extends DocumentTypes{
    public Document createDocument(){
        return new WordDocument();
    }
}
class PdfTypes extends DocumentTypes{
    public Document createDocument(){
        return new Pdf();
    }
}
class ExcelTypes extends DocumentTypes{
    public Document createDocument(){
        return new Excel();
    }
}
public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentTypes word = new WordDocumentTypes();
        Document wordDocument = word.createDocument();
        wordDocument.open();
        wordDocument.close();

        DocumentTypes pdf = new PdfTypes();
        Document pdfDocument = pdf.createDocument();
        pdfDocument.open();
        pdfDocument.close();

        DocumentTypes excel = new ExcelTypes();
        Document excelDocument = excel.createDocument();
        excelDocument.open();
        excelDocument.close();
        
    }
}
