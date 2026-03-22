import tkinter as tk
from tkinter import messagebox

class App(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Прототип системи - ЛР №6")
        self.geometry("700x600")
        self.configure(bg="#E0E0E0")
        
        # Контейнер для зміни кадрів
        self.container = tk.Frame(self)
        self.container.pack(fill="both", expand=True)
        
        self.show_registration()

    def show_registration(self):
        self.clear_frame()
        # Заголовок
        header = tk.Frame(self.container, bg="#4A6D2F", height=50)
        header.pack(fill="x")
        tk.Label(header, text="Реєстрація", fg="white", bg="#4A6D2F", font=("Arial", 14)).pack(pady=10)

        form = tk.Frame(self.container, bg="#E0E0E0", padx=50)
        form.pack(fill="both", expand=True)

        fields = ["Логін (Email)", "Пароль", "ПІБ", "Номер тф", "Місто"]
        for f in fields:
            tk.Label(form, text=f + ":", bg="#E0E0E0", fg="black").pack(anchor="w", pady=(10,0))
            tk.Entry(form, bg="white", fg="black").pack(fill="x")

        tk.Button(self.container, text="Зареєструватися та перейти до Каталогу", 
                  bg="#4A6D2F", fg="white", command=self.show_catalog).pack(pady=20)

    def show_catalog(self):
        self.clear_frame()
        # Заголовок каталогу [cite: 9]
        header = tk.Frame(self.container, bg="#4A6D2F", height=50)
        header.pack(fill="x")
        tk.Label(header, text="Каталог товарів", fg="white", bg="#4A6D2F", font=("Arial", 14)).pack(pady=10)

        # Категорії як на Рис. 2 [cite: 43, 44]
        menu_frame = tk.Frame(self.container, bg="#E0E0E0", pady=20)
        menu_frame.pack()

        categories = ["Антивіруси", "Операційні системи", "Офісні програми", "Утиліти"]
        for cat in categories:
            tk.Button(menu_frame, text=cat, width=25, height=2, 
                      command=lambda c=cat: messagebox.showinfo("Вибір", f"Відкрито розділ: {c}")).pack(pady=5)
        
        tk.Button(self.container, text="Назад до реєстрації", command=self.show_registration).pack(pady=10)

    def clear_frame(self):
        for widget in self.container.winfo_children():
            widget.destroy()

if __name__ == "__main__":
    app = App()
    app.mainloop()